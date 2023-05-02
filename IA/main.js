function changeToNormal(){
    const text = 'Normal: Coluna Normal, nenhum problema.';

    document.getElementById("text").innerHTML = text;
}

function changeToHernia(){
    const text = 'Hernia:  Deslocamento do disco intervertebral, estrutura cartilaginosa da coluna.'+
     'As hérnias ocorrem em consequência do desgaste e da fragilidade do disco';

    document.getElementById("text").innerHTML=text;
}

function changeToSpondy(){
    const text = 'Espondilolistese:  Quando uma das vértebras da coluna desliza sobre a outra, caracterizando'+ 
    ' a perda do alinhamento da coluna';

    document.getElementById("text").innerHTML=text;
}


document.addEventListener("DOMContentLoaded",function(){
    var botton = document.getElementById("g1");
    var img = document.getElementById("imagem");

    botton.addEventListener("click",function(){
        img.src = "./imagens/pizza.png";
    });
});

document.addEventListener("DOMContentLoaded",function(){
    var botton = document.getElementById("g2");
    var img = document.getElementById("imagem");

    botton.addEventListener("click",function(){
        img.src = "./imagens/pontos.png";
    });
});

document.addEventListener("DOMContentLoaded",function(){
    var botton = document.getElementById("g3");
    var img = document.getElementById("imagem");

    botton.addEventListener("click",function(){
        img.src = "./imagens/Histograma.png";
    });
});

document.addEventListener("DOMContentLoaded", function(){
    var botton = document.getElementById("gerar");

    botton.addEventListener("click", function(){
       
        var pelvic_incidence = parseFloat(document.getElementById("ip").value);
        var pelvic_tilt =parseFloat(document.getElementById("inp").value);
        var lumbar_lordosis_angle = parseFloat(document.getElementById("alomb").value);
        var sacral_slope = parseFloat(document.getElementById("is").value);
        var pelvic_radius = parseFloat(document.getElementById("rp").value);
        var degree_spondylolisthesis = parseFloat(document.getElementById("gs").value);

       if(degree_spondylolisthesis<=0.0632)/*1*/{
            if(sacral_slope<=0.1533)/*2*/{
                if(pelvic_radius<=0.5751)/*3*/{
                    if(pelvic_incidence<=0.1543)/*4*/{
                        changeToHernia();
                    }else if(pelvic_incidence>0.1543)/*4*/{
                        if(sacral_slope<=0.1253)/*5*/{
                            if(pelvic_tilt<=0.5075)/*6*/{
                                changeToNormal();
                            }else if(pelvic_tilt>0.5075)/*6*/{
                                changeToHernia();
                            }
                        }else if(sacral_slope>0.1253)/*5*/{
                            changeToHernia();
                        }
                    }
                }else if(pelvic_radius>0.5751)/*3*/{
                    if(degree_spondylolisthesis<=0.0418)/*7*/{
                        if(degree_spondylolisthesis<=0.0295)/*8*/{
                            if(sacral_slope<=0.032)/*9*/{
                                changeToHernia();
                            }else if(sacral_slope>0.032)/*9Mateus Augusto*/{
                                changeToNormal();
                            }
                        }else if(degree_spondylolisthesis>0.0295)/*8*/{
                            changeToHernia();
                        }
                    }else if(degree_spondylolisthesis>0.0418)/*7*/{
                        changeToNormal();
                    }
                }
            }else if(sacral_slope>0.1533)/*2*/{
                if(pelvic_radius<=0.516)/*10*/{
                    if(sacral_slope<=0.2808)/*11*/{
                        if(pelvic_radius<=0.4647)/*12*/{
                            changeToHernia();
                        }else if(pelvic_radius>0.4647)/*12*/{
                            if(lumbar_lordosis_angle<=0.1354)/*13*/{
                                changeToHernia();
                            }else if(lumbar_lordosis_angle>0.1354)/*13*/{
                                if(lumbar_lordosis_angle<=0.2767)/*14*/{
                                    if(sacral_slope<=0.1784)/*15*/{
                                        changeToHernia();
                                    }else if(sacral_slope>0.1784)/*15*/{
                                        changeToNormal();
                                    }
                                }else if(lumbar_lordosis_angle>0.2767)/*14*/{
                                    if(degree_spondylolisthesis<=0.0406)/*16*/{
                                        changeToHernia();
                                    }else if(degree_spondylolisthesis>0.0406)/*16Mateus Augusto*/{
                                        changeToSpondy();
                                    }
                                }
                            }
                        }
                    }else if(sacral_slope>0.2808)/*11*/{
                        if(degree_spondylolisthesis<=0.0459)/*17*/{
                            changeToNormal();
                        }else if(degree_spondylolisthesis>0.0459)/*17*/{
                            changeToSpondy();
                        }
                    }
                }else if(pelvic_radius>0.516)/*10*/{
                    if(degree_spondylolisthesis<=0.0378)/*18*/{
                        if(pelvic_tilt<=0.4918)/*19*/{
                            changeToNormal();
                        }else if(pelvic_tilt>0.4918)/*19*/{
                            if(degree_spondylolisthesis<=0.0231)/*21*/{
                                changeToNormal();
                            }else if(degree_spondylolisthesis>0.0231)/*21*/{
                                changeToHernia();
                            }
                        }
                    }else if(degree_spondylolisthesis>0.0378)/*18Mateus Augusto*/{
                        if(sacral_slope<=0.226)/*20*/{
                            if(degree_spondylolisthesis<=0.0455)/*22*/{
                                changeToHernia();
                            }else if(degree_spondylolisthesis>0.455)/*22*/{
                                changeToNormal();
                            }
                        }else if(sacral_slope>0.226)/*20*/{
                            changeToNormal();
                        }
                    }
                }
            }
       }else if(degree_spondylolisthesis>0.0632)/*1*/{
            changeToSpondy();
       }
       
        
        
    });
});