# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_www_session',
  :secret      => 'aa5a34d04989186899cf3e3d2440230f89ca4d8c2483700c7501b78449fc13e3cbf2a5b7e308dd33fb24ee29c5242fe72f1a6d770440206496caeb731ae53b9a'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
