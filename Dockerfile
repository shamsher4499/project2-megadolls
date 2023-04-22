FROM python:3.6-stretch
RUN python -m pip install --upgrade pip
ENV PYTHONUNBUFFERED 1
RUN mkdir /code
WORKDIR /code
RUN apt-get -y update \
    && apt-get install -y cron \
    # Cleanup apt cache
    && apt-get clean
COPY requirements.txt /code/
RUN pip install -r requirements.txt
ADD . /code/
RUN python manage.py crontab add
RUN python manage.py crontab show