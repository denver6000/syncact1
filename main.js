$("#b").click(function (e) { 
    
    $("#p1").css({
        color: "red",
        fontWeight: "bold",
        fontSize: "1.7em",
        transform: "scale(1.1) translateX(300px) translateY(60px)"
    });

    $("#p2").css({
        color: "blue",
        fontFamily: "Arial",
        fontWeight: "bold",
        fontSize: "1.7em",
        textShadow: "0px 0px 3px rgba(0, 0, 0, 0.5)",
        transform: "scale(1.1) translateX(300px) translateY(-60px)"
    });
    
});