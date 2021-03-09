//Cria um middleware onde todas as requests passam por ele 
const httpRedirect = async (req, res, next) => {

    //Checa se o protocolo informado nos headers é HTTP 
    if ((req.headers["x-forwarded-proto"] || "").endsWith("http"))
    
    //Redireciona pra HTTPS 
    await res.redirect(`https://${req.headers.host}${req.url}`) 

    //Se a requisição já é HTTPS 
    else {
    
    //Não precisa redirecionar, passa para os próximos middlewares que servirão com o conteúdo desejado
    await next()
    }
 
}

export default httpRedirect