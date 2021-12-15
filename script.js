function buscar(){
    let calendario = $("#calendario").val()
    
    
    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=zDxsPyQtlM0cNXSPWE0odIr59DONfyET7QrHZSA5&date=${calendario}`,
        success: function(response){
            console.log(response);
            $("#title").text(`${response.title}`)
            $("#imagem").html(`<img class= "imagem" src="${response.hdurl}">`)
            $("#sobre").text(`${response.explanation}`)
            
        },
        error: function(response){
            console.error(error);
            
        }
        
    })
}
    
buscar()
let btn = $("#btn")
btn.click(()=>{
    return buscar()
})
