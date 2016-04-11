import requests
from sys import argv
from os import path, listdir
import json
import hashlib

'''
Indexes the text corpus into elasticsearch
'''

elastic_url = "http://localhost:9200"

def search(uri, term):
    """Simple Elasticsearch Query"""
    query = json.dumps({
        "query": {
            "match": {
                "content": term
            }
        }
    })
    response = requests.get(uri, data=query)
    results = json.loads(response.text)
    return results

def indexFile(file):
	with open(file) as f:
		ftext = f.read()
	head, tail = path.split(file)
	id = hashlib.md5(tail).hexdigest()
	url = "%s/%s/%s/%s" % (elastic_url, "documents", "ocr", id)
	print url
	r = requests.post(url, data = json.dumps({"text": ftext, "name": file}))
	return r

def main():
	if len(argv) < 2:
		print "Please enter corpus_dir"
		exit()

	corpus_dir = argv[1]
	if path.isdir(corpus_dir) == False:
		print "Please enter valid corpus_dir"
		exit()

	for file in listdir(corpus_dir):
		print indexFile(path.join(corpus_dir, file))
		print file

if __name__ == '__main__':
	main()