# Grunt Boilerplate

A base to start and deploy your project usign Grunt: The JavaScript Task Runner


## Getting Started

- First, you need to have [Node.JS](http://nodejs.org/) and NPM installed.

- Clone Grunt Boilerplate

```bash
$ git clone https://github.com/vagnervjs/grunt-boilerplate.git
```

- Enter in the folder

```bash
$ cd grunt-boilerplate
```

- Install dependencies

```bash
$ sudo npm install
```

- Change `package.json` file adding your project's info

- Change the deploy remote host (if you want to deploy)

		deploylive: {
			src: './dist/',
			dest: '/var/www/yourproject',
			host: 'root@yourhost',
			recursive: true,
			syncDest: true
		}

- Customize and add grunt tasks for your needs

- When everything is ok, just run 

```bash
$ sudo grunt
```

## License

Code is under [MIT license](http://vagnersantana.mit-license.org)  © Vagner Santana.





