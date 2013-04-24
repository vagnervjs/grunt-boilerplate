#Grunt Boilerplate

A base to start and deploy your project usign Grunt: The JavaScript Task Runner

---

##Getting Start

- First, you need to have Node.JS and NPM installed

- Clone Grunt Boilerplate

```bash
$ git clone https://github.com/vagnervjs/grunt-boilerplate.git
```

- Enter in the folder

```bash
$ cd grunt-boilerplate
```

- Install dependences

```bash
$ sudo npm install
```
- Change packge.json file add your project info

- Change the deploy remote host

```bash
deploylive: {
	src: './dist/',
	dest: '/var/www/yourproject',
	host: 'root@yourhost',
	recursive: true,
	syncDest: true
}
```

- Customize and add grunt tasks for your needs

- When everything is ok, just run

```bash
$ sudo grunt
```





