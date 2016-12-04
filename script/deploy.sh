#!bin/bash

# Push to App Server 2 (us-east-1d)
ssh -y ec2-user@10.0.3.100 -T <<EOF
  sudo su
  cd ~
  yum -y update
  yum -y install gcc-c++ make
  yum -y install openssl-devel
  yum -y install git

  # install node
  yum -y install nodejs npm --enablerepo=epel

  # update npm
  npm install -g npm
  npm install forever --global

  rm -rf movie-quotes/
  git clone https://github.com/stemmlerjs/movie-quotes.git
  cd movie-quotes
  pkill -9 node
  npm stop
  npm install && npm run start
EOF

# Push to App Server 2 (us-east-1a)
ssh -y ec2-user@10.0.4.12 -T <<EOF
  sudo su
  cd ~
  yum -y update
  yum -y install gcc-c++ make
  yum -y install openssl-devel
  yum -y install git

  # install node
  yum -y install nodejs npm --enablerepo=epel

  # update npm
  npm install -g npm
  npm install forever --global

  rm -rf movie-quotes/
  git clone https://github.com/stemmlerjs/movie-quotes.git
  cd movie-quotes
  pkill -9 node
  npm stop
  npm install && npm run start
EOF


