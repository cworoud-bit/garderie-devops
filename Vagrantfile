# -*- mode: ruby -*-
Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/jammy64"          # Ubuntu Server 22.04
  config.vm.hostname = "garderie-vm"

  # Réseau privé avec IP fixe
  config.vm.network "private_network", ip: "192.168.56.10"

  config.vm.provider "virtualbox" do |vb|
    vb.name   = "garderie-vm"
    vb.memory = 2048
    vb.cpus   = 2
  end

  # Provisioning Ansible (ansible_local : Ansible est installé dans la VM,
  # pratique même si l'hôte est sous Windows)
  config.vm.provision "ansible_local" do |ansible|
    ansible.playbook = "ansible/site.yml"
    ansible.install_mode = "default"
  end
end
