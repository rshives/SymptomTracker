// AjaxRequest object constructor
function AjaxRequest() {
  // Try the XMLHttpRequest object first
  if (window.XMLHttpRequest) {
    try {
      this.request = new XMLHttpRequest();
    } catch(e) {
      this.request = null;
    }
    //alert("XMLHttpRequest");
  // Now try the ActiveX (IE) version
  } else if (window.ActiveXObject) {
    try {
      this.request = new ActiveXObject("Msxml2.XMLHTTP");
      //alert("Msxml2.XMLHTTP");
    // Try the older ActiveX object for older versions of IE
    } catch(e) {
      try {
        this.request = new ActiveXObject("Microsoft.XMLHTTP");
        //alert("Miscrosoft.XMLHTTP");
      } catch(e) {
        this.request = null;
      }
    }
  }

  // If the request creation failed, notify the user
  if (this.request == null)
    alert("Ajax error creating the request.\n" + "Details: " + e);
}

// Send an Ajax request to the server
AjaxRequest.prototype.send = function(type, url, handler, postDataType, postData) {
  if (this.request != null) {
    // Kill the previous request
    this.request.abort();

    // Tack on a dummy parameter to override browser caching
    url += "?dummy=" + new Date().getTime();
    
	//alert("New Url is: " + url);
	
    try {
      this.request.onreadystatechange = handler;
      this.request.open(type, url, true); // always asynchronous (true)
      if (type.toLowerCase() == "get") {
        // Send a GET request; no data involved
        this.request.send(null);
        
        //alert("sending GET");
      } else {
        // Send a POST request; the last argument is data
        this.request.setRequestHeader("Content-Type", postDataType);
        this.request.send(postData);
        
        //alert("sending POST");
      }
    } catch(e) {
      alert("Ajax error communicating with the server.\n" + "Details: " + e);
    }
  }
}

AjaxRequest.prototype.getReadyState = function() {
  return this.request.readyState;
}

AjaxRequest.prototype.getStatus = function() {
  return this.request.status;
}

AjaxRequest.prototype.getResponseText = function() {
  return this.request.responseText;
}

AjaxRequest.prototype.getResponseXML = function() {
  return this.request.responseXML;
}

var ajaxReq = new AjaxRequest();
		
function loadPage() {
	var date = new Date();
	
	document.getElementById("btnStore").disabled = false;
	document.getElementById("Q1Date").value = date.shortFormat();
	clearAll();
}
			
// Handles the response form the ajaxReq.send function
function handleLevelRequest() {
	if(ajaxReq.getReadyState() == 4 && ajaxReq.getStatus() == 200) {
		document.getElementById("btnStore").disabled = false;
	}
}
			
// Gets all content from a DOM element/node.
function getText(elem) {
	var text = "";
		
	if(elem) {
		if(elem.childNodes) {
			for(var i = 0; i < elem.childNodes.length; i++) {
				var child = elem.childNodes[i];
				if(child.nodeValue)
					text += child.nodeValue;
				else {
					if(child.childNodes)
						if(child.childNodes[0].nodevalue)
							text += child.childNodes[0].nodeValue;
				}
			}
		}
	}
	return text;
}

function storeData() {
	var postSring = "";
	var phpFile = "";
	var numSymptoms = 14;
	var levelsNumBoxes = 227;
	var levelsNumQuestions = 48;

	//phpFile = "storeQ2Symptoms.php";
	postString = determineMultipleChoiceCheckedStatus("A", levelsNumBoxes, levelsNumQuestions);
	//alert("Q2 postString: " + postString);
	// Remove this to hit the db!!!!!!!!!!!!!1
	//postString = "";
	
	if (postString != "") {
		document.getElementById("pfA49").value = document.getElementById("A228").value;
		document.getElementById("pfA50").value = document.getElementById("A229").value;
		//alert("Updating Database");	
		//ajaxReqSend(postString, phpFile, "btnStore", "txtLevelStatus");
		document.getElementById("postForm").submit();
		postString = "";
		
		phpFile = "storeQ1Symptoms.php";
		postString = determineCheckedStatus("symp", numSymptoms);
		//alert("Q1 postString: " + postString);
		// Remove this to hit the db!!!!!!!!!!!!!!!!!!!!!
		//postString = "";
		
		if(postString != "") {
			//alert("Updating Database");
			ajaxReqSend(postString, phpFile, "btnStore");
			postString = "";
		}
		
		clearAll();
	}
}

function determineCheckedStatus(myField, numQuestions) {
	var postString = "";
	
	var date = new Date();
	var dateField = document.getElementById("Q1Date").value;
	
	if(dateField.length > 8) {
		postString += "Q1Date=" + date.shortFormat();
	}
	else { 
		postString += "Q1Date=" + dateField;
	}
			
	for(var x = 1; x <= numQuestions; x++) {
		if(document.getElementById(myField + x).checked)
			postString += "&" + myField + x + "=" + document.getElementById(myField + x).value;
		else
			postString += "&" + myField + x + "=0";
	}
	
	return postString;
}

function determineMultipleChoiceCheckedStatus(myField, numBoxes, numQuestions) {
	var postString = "";
	var date = new Date();
	var dateField = document.getElementById("Q1Date").value;
	var q2Array = new Array();
	var q2ArLength = 0;
	
	if(dateField.length > 8) {
		postString += "QDate=" + date.shortFormat();
		document.getElementById("pfDate").value = date.shortFormat();
	}
	else { 
		postString += "QDate=" + dateField;
		document.getElementById("pfDate").value = dateField;
	}
	
    for (var x = 1; x <= numBoxes; x++) {
	  if (document.getElementById(myField + x).checked) {
		  q2ArLength = q2Array.push(document.getElementById(myField + x).value);
	  }
    }
  
    // Make sure all the questions have an answer
    if (q2ArLength > numQuestions) {
  	  alert("You have to many questions checked.");
  	  postString = "";
    }
  
  // Make sure we have enough fields to send to the PHP file.
  if (q2ArLength < numQuestions) {
  	//alert("q2ArLength: " + q2ArLength);
  	//alert("numQuestions: " + numQuestions);
  	alert("There are not enough questions answered.");
  	postString = "";
  }
  
  // Create the string to post to the PHP file
  if (q2ArLength == numQuestions) {
	  for (var x = 0; x < q2Array.length; x++) {
	  	postString += "&" + myField + (x + 1) + "=" + q2Array[x];
	  	//alert("x: " + x);
	  	document.getElementById("pfA" + (x+1)).value = q2Array[x];
  	  }
  }  

  return postString;
}

function ajaxReqSend(postString, phpFile, disBtn) {
  // Disable the button and set the status
  document.getElementById(disBtn).disabled = true;

  // Send ajax request
  ajaxReq.send("POST", phpFile, handleLevelRequest,
	"application/x-www-form-urlencoded; charset-UTF-8",
	postString);
}

function clearAll() {
	var numChkbxIdsymp = 14;
	var numLevelsChkbxId = 227;
	var numQuestions = 50;
	
	for (var x = 1; x <= numChkbxIdsymp; x++) {
		document.getElementById("symp" + x).checked = false;
	}
	
	for (var x = 1; x <= numLevelsChkbxId; x++) {
		document.getElementById("A" + x).checked = false;
	}
	
	document.getElementById("A228").value = "";
	document.getElementById("A229").value = "";
	document.getElementById("pfDate").value = "";
	
	for (var x = 1; x <= numQuestions; x++) {
		document.getElementById("pfA" + x).value = "";
	}
}

// Date prototype
Date.prototype.shortFormat = function() {
	var month;
	
	if((this.getMonth() + 1) < 10)
		month = "0" + (this.getMonth() + 1);
	else
		month = (this.getMonth() + 1);
		
	return this.getFullYear().toString() + month + this.getDate().toString();
}
