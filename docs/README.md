sudo apt install ruby3.2-dev build-essential


bundle config set --local path 'vendor/bundle'
bundle install


bundle exec jekyll serve