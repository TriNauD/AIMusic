FROM ubuntu:18.04

RUN apt-get update
RUN apt-get install -y pkg-config
RUN apt-get install -y libpng-dev
RUN apt-get install -y libjpeg8-dev
RUN apt-get install -y libfreetype6-dev
RUN apt-get install -y libblas-dev
RUN apt-get install -y liblapack-dev
RUN apt-get install -y libatlas-base-dev
RUN apt-get install -y gfortran
RUN apt-get install -y python
RUN apt-get install -y python-dev
RUN apt-get install -y python-pip
RUN apt-get install -y nodejs
RUN node -v
RUN apt-get install -y npm
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -



RUN pip -V && \
	python -V

RUN pip install tensorflow==0.12.1

COPY ./server/requirements.txt /tmp/
RUN pip install -r /tmp/requirements.txt

COPY . /src/

WORKDIR /src/static/
RUN npm install && npm run build

WORKDIR /src/server/

EXPOSE 8080
ENTRYPOINT python server.py
