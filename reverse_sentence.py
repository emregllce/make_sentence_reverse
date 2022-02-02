
sentence = input("enter a sentence to reverse  ")
sentence = sentence.split(" ")

reverse_sent = ""
for i in reversed(range(1, len(sentence))):
    reverse_sent += sentence[i] + " "
reverse_sent += sentence[0]
reverse_sent