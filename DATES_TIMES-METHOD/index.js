//////dates method//////////
var now = new Date();
        document.write(now);
        ////date practice///
       
        //////simple date print/////////
        document.write("<br>");
        document.write("<br>");
        let no=new Date();
        document.write(no.toDateString());
        /////just date print//////////
        document.write("<br>");
        document.write("<br>");
        var dat=new Date();
        document.write(dat.getDate());
        //////print year/////////////
        document.write("<br>");
        document.write("<br>");
        var yea=new Date();
        document.write(yea.getFullYear());
        ////print month//////////////
        document.write("<br>");
        document.write("<br>");
        var mon=new Date();
        document.write(mon.getMonth());
        ////print date///
        document.write("<br>");
        document.write("<br>");
        var date=new Date();
        document.write(date.getDate());
        ////check past dates////
        document.write("<br>");
        document.write("<br>");
        var past=new Date('august 23 2022');
        document.write("<h1>check past dates</h1>");
        document.write(past.getDate());
        document.write("<br>");
        document.write(past.getMonth());
        document.write("<br>");
        document.write(past.getFullYear());
        ////////////time methods////////////
        document.write("<br>");
        document.write("<br>");
        document.write("<h1>time methods</h1>");
        /////get time/////
        var tim=new Date();
        document.write(tim.getHours());
        /////get minutes//////
        document.write("<br>");
        document.write("<br>");
        var min=new Date();
        document.write(min.getMinutes());
        ///////get seconds/////////
        document.write("<br>");
        document.write("<br>");
        var sec=new Date();
        document.write(sec.getSeconds());
        //////get milliseconds////////
        document.write("<br>");
        document.write("<br>"); 
        var milsec=new Date();
        document.write(milsec.getMilliseconds());
        //////set dates method/////////
        document.write("<br>");
        document.write("<br>");
        document.write("<h1>set methods</h1>");
        ////set date//////
        var now=new Date();
        now.setDate(19);
        document.write(now);
        document.write("<br>");
        document.write("<br>");
        /////set year/////////
        var now=new Date();
        now.setgetYear(2024);
        document.write(now);
        document.write("<br>");
        document.write("<br>");
////set hours//////
var hor=new Date();
hor.setHours(12);
document.write(hor)
document.write("<br>");
document.write("<br>");
//////concatinate the methods/////////
document.write("<br>");
document.write("<br>");
document.write("<h1>concatinate date</h1>");
var conc=new Date();
document.write(now.getDate()+"/"+conc.getMonth()+"/"+conc.getFullYear());