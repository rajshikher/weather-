import requests

API_KEY = "e31d949a2a8c0ebbd962b26a90bcef9a"  # Replace with your actual API key

try:
    response = requests.get("http://api.weatherstack.com/current", params={
        "access_key": API_KEY,
        "query": "Mumbai"
    })
    response.raise_for_status()  # Raise an HTTPError for bad responses (4xx and 5xx)
    data = response.json()
    print(f"Current temperature in Mumbai: {data['current']['temperature']}°C")
except requests.exceptions.RequestException as e:
    print(f"An error occurred: {e}")