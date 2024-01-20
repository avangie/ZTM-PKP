from plyer import notification
import webbrowser
import time

def send_notification():
    title = 'Czas na przerwę'
    message = 'KLIKNIJ TUTAJ I ZAGRAJ W GRĘ!!!!!!'
    notification.notify(title=title, message=message)
    time.sleep(3)  # Wait for 3 seconds
    webbrowser.open('http://0.0.0.0:3000')

# Ustawienie crona do uruchamiania skryptu co godzinę
while True:
    send_notification()
    time.sleep(20)  # 3600 sekund = 1 godzina
