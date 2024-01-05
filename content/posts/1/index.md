---
title: Server Customization and Security - First Steps on a fresh Server
i: '1'
date: 2024-01-05T14:52:07Z
type: blog
cover: false
tags: []
---

Today we're going to take a look at how to configure and setup a
Linux server so that it is secure. If you really dig it I created a couple of
notes that you can use to further harden your server and customize it. If you
are lazy wait a bit I will be creating an ansible playbook to automate everything.

## Prerequisites

* You already created an account at your favourite VPS server provider (Digital
  Ocean, Vultr etc.)
* You already put some money on your VPS account and deployed a VPS (go with
  the cheapest 5\$/month, is plenty to start out)
* Optional you bought a domain name (namecheap.com etc.) and pointed the A
  record to your VPS servers IPV4 address. A free version I like to use:
  https://duckdns.org/
* If you are on Windows you have WSL setup or use a Linux VM. Optionally install tmux.
* If you are on Mac you are good to go. Optionally install homebrew and install tmux with it.

> 🧐 If you don't like tmux or don't wanna learn or use that. Just open up two
> terminal windows instead :)

## First Steps

> 🧐 Don't add the SSH public key via your VPSs website. This would add the key
> for the root users home, which we'll disable anyways.

> ⚠️ As always with daemons remember to restart the systemd service to apply
> changes in the config files. `systemctl restart sshd`

> 📝 Replace 'xnasero' with whatever username you want to use.

1. Start a terminal and run `tmux`
1. 1st tmux window - login: Update system (keep that connection going, in case something goes wrong)
1. 2nd tmux window - login: Configure stuff
1. Add new user group: `sudo groupadd xnasero` (non existent groups can't be added with `useradd` directly)
1. Create regular user with sudo access (Fedora uses wheel, Debian uses sudo):
   `useradd -m -g xnasero -G users,sudo,adm -s /bin/bash -c admin-account xnasero && passwd xnasero`
1. Check if wheel|sudo group is activated/exists on your OS or add it manually:
   `vsudo` look for `%wheel  ALL=(ALL)       ALL` to double check: `sudo -l -U xnasero`
1. Disable ssh root login: `vi /etc/ssh/sshd_config` look for `PermitRootLogin yes` change to `no`
1. If you don't have an ssh key pair generate one on your local machine. Then
   we copy the public key to the server: `ssh-copy-id -i ~/.ssh/yourkey.pub xnasero@remote_server_IP`
    1. Open new tmux window and try to connect with username and see if it works (no pw prompt and logged in as xnasero)
1. Disable ssh password login: `vi /etc/ssh/sshd_config` add `AuthenticationMethods publickey`
1. Disable root login altogether: `sudo passwd -l root`

## Next Steps

Checkout my notes to further customize and secure your beloved server.

1. [Server Security and Setup: Make it cosy](https://github.com/SimonWoodtli/zet/tree/main/20240104134254)
    1. [Server Security: Config ufw Firewall](https://github.com/SimonWoodtli/zet/tree/main/20240104130222)
    1. [Server Security: Additional SSH Hardening](https://github.com/SimonWoodtli/zet/tree/main/20240104124550)
    1. [Server Security: Add fail2ban](https://github.com/SimonWoodtli/zet/tree/main/20240104010508)
1. Add data backup system: This is different on each server and depends on the services and the data that you want to backup.
1. Add update system: Use LVMs to create snapshots of your system before you update any packages
1. Add services and apps you want to host, configure them and grok how to host them in a secure way.
