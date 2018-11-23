import flask
from sklearn.linear_model import LogisticRegression
import numpy as np
import pandas as pd
import pickle


#with open('logistic_model_app.sav', 'rb') as f:
 #   final_model = pickle.load(f)

#---------- URLS AND WEB PAGES -------------#

# Initialize the app
app = flask.Flask(__name__)

# Homepage
@app.route("/")
def viz_page():
    """
    Homepage: serve our visualization page, awesome.html
    """
    with open("index.html", 'r') as viz_file:
        return viz_file.read()

# Get an example and return it's score from the predictor model
@app.route("/score", methods=["POST"])
def score():
    """
    When A POST request with json data is made to this uri,
    Read the example from the json, predict probability and
    send it with a response
    """
    
    with open('logistic_model_app.sav', 'rb') as f:
        final_model = pickle.load(f)
        
    with open('Xcols_app', 'rb') as f:
        cols = pickle.load(f)
        
    cols=np.array(cols)
    dic = zip(range(len(cols)),cols)
    dic = list(dic)
    # Get decision score for our example that came with the request
    test = flask.request.json
    x = list(test)
    #Convert input data into dummified variables
    vals = np.zeros(143)
    vals[1]=test[1]
    for i in range(3,6):
        for j in range(len(dic)):
            if test[i] in dic[j][1]:
                vals[j]=1
    #Fill in values that aren't included in sample app
    vals[79]=9
    vals[80]=60
    vals[85]=1
    vals[87]=1
    vals[124]=1
    
    pred_value = final_model.predict_proba(vals.reshape(1, -1))
    
    
    if pred_value[0][0] > 0.7:
        message = "Your project looks great and has a good chance to receive full funding. Remember to check back consistently and fundraise!"
    elif pred_value[0][0] > 0.4:
        message = "Your project is coming along but we think there are some things to improve. Chat with someone at Donors Choose for suggestions."
    else:
        message = "Something looks a little off. You may want to reconsider parts of your project."
    results = {"score": message}
    return flask.jsonify(results)

#--------- RUN WEB APP SERVER ------------#

# Start the app server on port 80
# (The default website port)
app.run(host='0.0.0.0')
app.run(debug=True)