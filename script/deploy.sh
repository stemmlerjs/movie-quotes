#!bin/bash

ssh ec2-user@10.0.1.155 <<EOF
  install git
  sudo yum -y update
  sudo yum -y install gcc-c++ make
  sudo yum -y install openssl-devel
  sudo yum -y install git

  # install node
  sudo yum install nodejs npm --enablerepo=epel

  # update npm
  npm install -g npm

  git clone https://github.com/stemmlerjs/movie-quotes.git
  cd movie-quotes
  npm run start
EOF

ssh ec2-user@10.0.3.100 <<EOF
  install git
  sudo yum -y update
  sudo yum -y install gcc-c++ make
  sudo yum -y install openssl-devel
  sudo yum -y install git

  # install node
  sudo yum install nodejs npm --enablerepo=epel

  # update npm
  npm install -g npm

  git clone https://github.com/stemmlerjs/movie-quotes.git
  cd movie-quotes
  npm run start
EOF