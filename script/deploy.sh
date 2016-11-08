#!bin/bash

ssh ec2-user@10.0.1.155 <<EOF
  sudo yum -y update
  sudo yum -y install gcc-c++ make
  sudo yum -y install openssl-devel
  sudo yum -y install git

  # install node
  sudo yum -y install nodejs npm --enablerepo=epel

  # update npm
  sudo npm install -g npm
  sudo npm install forever --global

  git clone https://github.com/stemmlerjs/movie-quotes.git
  cd movie-quotes
  npm install && npm run start
  done
EOF

ssh ec2-user@10.0.3.100 <<EOF
  sudo su
  yum -y update
  yum -y install gcc-c++ make
  yum -y install openssl-devel
  yum -y install git

  # install node
  yum -y install nodejs npm --enablerepo=epel

  # update npm
  npm install -g npm
  npm install forever --global

  git clone https://github.com/stemmlerjs/movie-quotes.git
  cd movie-quotes
  npm install && npm run start
  done
  
EOF

