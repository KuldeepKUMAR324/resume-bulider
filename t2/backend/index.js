require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const app = express();

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));


app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
    httpOnly: true,
  }
}));

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect('mongodb://127.0.1:2717/practice_mern', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: 'http://localhost:3001/auth/google/callback'
}, async (accessToken, refreshToken, profile, done) => {
  try {
    const existingUser = await FormDataModel.findOne({ email: profile.emails[0].value });
    if (existingUser) {
      return done(null, existingUser);
    }

    const newUser = await FormDataModel.create({
      email: profile.emails[0].value,
      password: ''
    });

    return done(null, newUser);
  } catch (err) {
    return done(err, null);
  }
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  FormDataModel.findById(id).then(user => done(null, user));
});

app.post('/register', (req, res) => {
  const { email, password } = req.body;
  FormDataModel.findOne({ email }).then(user => {
    if (user) {
      res.json("Already registered");
    } else {
      FormDataModel.create({ email, password })
        .then(newUser => res.json(newUser))
        .catch(err => res.json(err));
    }
  });
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  FormDataModel.findOne({ email }).then(user => {
    if (user) {
      if (user.password === password) {
        res.json("Success");
      } else {
        res.json("Wrong password");
      }
    } else {
      res.json("No records found!");
    }
  });
});

app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('http://localhost:5173/home');
  }
);

app.get('/user', (req, res) => {
  if (req.user) {
    res.json({ user: req.user });
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
});

app.get('/logout', (req, res) => {
  req.logout(() => {
    res.redirect('http://localhost:5173');
  });
});

app.listen(3001, () => {
  console.log(' kuldeep Server running at http://localhost:3001');
});
