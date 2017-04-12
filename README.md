# Angular-blog
This project is created for experiments with AngularJS framework.
## Link
[Angular-blog](https://angblog.herokuapp.com/)
# Such functions as are realized: 
* viewing of posts 
* viewing of comments 
* addition and removal of the comment
* search of the comment
* search on posts
* the filtered search 
* sortings of posts according to various parameters (date, the name)
* pagination 
* routing
# Technologies
## Environment
angular-blog is built with Atom from GitHub
## Frameworks
* AngularJS
* Bootstrap 3, Bootstrap UI
## Webserver Interface
I used Rack for webserver emulation. If you want to install, see below.
### Install Ruby
#### Mac/Linux
1.Install [Homebrew](https://brew.sh/):
```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
2.Install (or upgrade) Ruby:
```
brew install ruby
```
#### Windows [here](http://rubyinstaller.org/)
### Use Ruby Gems to install Bundler & Rack
1.Install Bundler
```
sudo gem install bundler
```
2.Create a Gemfile inside your project and put:
```
source 'https://rubygems.org'
```
```
gem 'rack'
```
3.Run & Install
```
bundle install
```
### Setup Rack for webserver emulation:
1.Create a file called `config.ru` on the same level as your `src` folder. Which is what contians your static files (`js`, `css`, and `images` directory) as well as your `index.html` file. Inside the `config.ru` file, add:
```
use Rack::Static,
  :urls => ["/images", "/js", "/css", "/templates"],
  :root => "src"

run lambda { |env|
  [
    200,
    {
      'Content-Type'  => 'text/html',
      'Cache-Control' => 'public, max-age=86400'
    },
    File.open('src/index.html', File::RDONLY)
  ]
}
```
2.Run `rackup` in Terminal/Command Prompt.
3.Navigate to http://127.0.0.1:9292/ or http://localhost:9292/
