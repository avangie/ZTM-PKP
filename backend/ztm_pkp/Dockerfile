# Use an official Python runtime as a parent image
FROM python:3.8

# Set environment variables for Python
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app/

# Install any needed packages specified in requirements.txt
RUN pip install --upgrade pip && pip install -r requirements.txt

# Install additional packages for cron, notify-send, and xdg-open
RUN apt-get update && apt-get install -y \
    cron \
    libnotify-bin \
    xdg-utils \
    dbus-x11

# Add notify-script.sh to the container
ADD notify-script.sh /root/notify-script.sh
RUN chmod +x /root/notify-script.sh

# Add a crontab entry to run the script every hour
RUN echo "0 * * * * root /root/notify-script.sh" >> /etc/crontab

# Expose port 8000 for the Django development server
EXPOSE 8000

# Run the Django development server
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
