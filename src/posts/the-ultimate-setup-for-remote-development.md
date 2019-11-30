---
title: The ultimate setup for remote development
path: "/notes/remote-web-developer-setup"
date: "2017-02-08"
---

I'm a programmer. Like most programmers, I use an Apple laptop. They're just the
best on the market and the best purchase you can make as a developer. No
fanboyism here, just stating facts. They're fast, well built, and durable. I've
had my MacBook Air for close to three years now and never had a single issue with it.

I rely on this laptop for all my personal / client work. I run vagrant boxes, docker containers in it and all the usual stuff. I've also traveled with it quite a lot (I even have the UK / EU adapters).

As a result, I've developed this irrational fear that it would get stolen or
fall off my bedroom window (things like that happen, trust me). Interestingly
enough, it coincides with my growing interest for remote work.

So I started to look for ways to create a development server that would allow me
to remain productive even if I lose / break my laptop, or when I'm on the road.

## Why

Ok, so you've read all this and you're thinking "How is it going to benefit me ?".

The main selling points to creating a remote development environment are the
following:

* It's cheap
* You learn linux
* You become OS agnostic (I said no fanboyism)
* You can work from almost anywhere


## What you need

### Laptop

Because all of your work is now done on a remote machine you don't really have
to care about what computer you're using. It can be a super expensive (notice I
didn't say overpriced) Apple laptop or any of its really good windows competitors (the DELL xps 13/15 comes to mind) or even a super cheap, 35£ raspberry Pi. Some people even use chromebooks ! They stick ubuntu on them and use them as their primary machines (SSH is a bit tricky to setup on chrome OS).

## Dev Tools ##

### Git

This one's obvious. While git is a life saver and a great tool for collaboration in large teams (distributed or not), you can also use it as a backup system for your code when you're a solo developer.

### Vim

I've used sublime text but felt bad for continuously extending the trial because I
couldn't pay for it. Then I switched to atom and got frustrated by how slow it
runs. Then one of my colleagues in England introduced me to vim, and I never
looked back. It's the lightest, fastest and overall best text editor out there by a huge
argin (in my opinion).

Vim is highly customizable and lets you save your settings inside a
`.vimrc` file, which makes it version control friendly. It also makes your vim
environment 100% portable as it comes standard in most linux server distros.

### Tmux

The best companion to vim. Tmux is a terminal multiplexer. With Tmux you can
essentially access multiple terminal sessions inside a single window. This gives
you the ability to work on multiple projects at a time. You can even save
sessions, attach and reattach to them. It's painless.
Just like vim, it's extremely customizable. All of your settings can be stored
inside of a `.tmux.conf` file.

### A VPS

To start developing on a remote server, you'll need ... well, a remote
server. If you don't know what a VPS is, it stands for **Virtual Private Server**.
It's essentially a virtual machine that you pay for monthly, which runs a server
distribution of linux (Ubuntu, CentOS ...). You can connect to it via SSH (it has a public ip address) and start playing around. You have complete control over the server, you can configure it however way you want.

There's a large range of VPS providers on the market, the most notable
ones are [Linode](https://www.linode.com/), [Digital Ocean](https://www.digitalocean.com), and [Amazon EC2](https://aws.amazon.com/ec2/). (If you're in the Euro Zone, you might want to look into [Scaleway](https://www.scaleway.com)).

### Dotfiles

As I previously mentioned above, you can save your settings for vim and tmux in
what are called **dotfiles** (files that start with a period). However dotfiles
are not exclusive to vim and tmux, you can for example save your shell configuration in a **.zshrc** or **.bashrc** config file, or your git settings in a **.gitconfig** file.

Doing this is extremely powerful because you can store these configuration files
on github and always pull the latest version when you launch a new development server.

You can check out my own [dotfiles](https://github.com/Zabanaa/dotfiles) on github to help you get started.

### (Optional) Ansible

Manually setting up servers is fun for the first couple of times, then it just
becomes repetitive. And what do you do with repetitive tasks ? You automate
them.

Ansible is a provisioning tool written in python that will help you do just that.
You give it the ip address (or addresses) of the server you want to configure and it will execute all the tasks you tell it to.

With Ansible you can:

* run shell commands
* install packages
* create directories and files
* add users and groups
* clone git repos
* use templates and pass variables to them
* and much more

If you don't like Ansible, there are other server provisioning tools like
[puppet](https://puppet.com/), [chef](https://www.chef.io/) and [salt](https://saltstack.com/) that will work just as good.

If you're interested, you can have a look at the [ansible playbook I've made](https://github.com/Zabanaa/night-city) to provision my development servers.

## Caveats

* it takes time to learn linux and networking (SSH etc)
* vim has a learning curve to it
* you become reliant on an internet connection
