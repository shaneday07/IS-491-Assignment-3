function MeetDates()
{
    var firstdate = new Date(document.getElementById("firstdate").value);
    var meetinterval = Number(document.getElementById("interval").value);
    var meetings = Number(document.getElementById("meetings").value);
    var calcdate;
    var count = 0;
    var result = "<table><tr><th>Meeting</th><th>Meeting Date</th></tr>";
    for (count = 0; count <meetings; count++)
    {
        
    calcdate = firstdate.toDateString(firstdate.setDate(firstdate.getDate()
                + meetinterval));
    
    result+= "<tr><td>" + (count +1) + "</td><td>" + calcdate + "</td></tr>";
    
    firstdate.setDate(firstdate.getDate() + 1)
    }
    
    result += "</table>";
    
    document.getElementById("meetingdates").innerHTML = result;
}