import requests

url = 'https://api.fpt.ai/hmi/asr/general'
payload = open('XinChao.mp3', 'rb').read()

print(payload)
# headers = {
#     'api-key': 'Cdk4bWr5P8cbisSjQOMbUL9NV0z9OyqV'
# }

# response = requests.post(url=url, data=payload, headers=headers)

# print(response.json())