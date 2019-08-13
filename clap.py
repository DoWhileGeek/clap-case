#!/usr/bin/env python3
import argparse


def convert(sentence, splitter, emoji):
	tokens = sentence.split(splitter)

	joined = " {} ".format(emoji).join(tokens)

	return "{emoji} {} {emoji}".format(joined, emoji=emoji)

parser = argparse.ArgumentParser()
parser.add_argument("text", help="text to parse")
parser.add_argument("-e", "--emoji", default ="\U0001F44F", help="emoji to use between words")
parser.add_argument("-s", "--seperator", default =" ", help="character to split the sentence with")
args = parser.parse_args()

print(convert(args.sentence, args.splitter, args.emoji))
