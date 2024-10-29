def hello_world():
    return "Hello world!"


def rps(hand1, hand2):
    # finish this code:
    if hand1 != "rock" and hand1 != "paper" and hand1 != "scissors":
        return "Invalid"
    if hand2 != "rock" and hand2 != "paper" and hand2 != "scissors":
        return "Invalid"
    if hand1 == hand2:
        return "Tie!"
    if (hand1 == "rock" and hand2 == "scissors") or (
        hand1 == "scissors" and hand2 == "rock"
    ):
        return "Rock wins!"
    if (hand1 == "paper" and hand2 == "rock") or (
        hand1 == "rock" and hand2 == "paper"
    ):
        return "Paper wins!"
    if (hand1 == "scissors" and hand2 == "paper") or (
        hand1 == "paper" and hand2 == "scissors"
    ):
        return "Scissors wins!"
