var turn=0;
                var func = function(p)
                {
                    if(turn==0)
                    {
                        document.getElementById(p.toString()).innerHTML="⚫";
                        document.getElementById(p.toString()).disabled=true;
                        turn=1;
                    }
                    else if(turn==1)
                    {
                        document.getElementById(p.toString()).innerHTML="⚪"; 
                        document.getElementById(p.toString()).disabled=true;
                        turn=0;
                    }
                }
                for(var i=0;i<=14;++i)
                {
                    for(var j=0;j<=14;++j)
                    {
                        var btn=document.createElement("button");
                        if(i!=0&&i!=14&&j!=0&&j!=14)
                        {
                            btn.style.cssText="margin:0px;float:left;border:0px;width:50px;height:50px;font-size:30px;background:url(board.png);background-size:50px";
                        }
                        else if(i==0&&j!=0&&j!=14)
                        {
                            btn.style.cssText="margin:0px;float:left;border:0px;width:50px;height:50px;font-size:30px;background:url(boardtop.png);background-size:50px";
                        }
                        else if(i==14&&j!=0&&j!=14)
                        {
                            btn.style.cssText="margin:0px;float:left;border:0px;width:50px;height:50px;font-size:30px;background:url(boardbottom.png);background-size:50px";
                        }
                        else if(i!=0&&i!=14&&j==0)
                        {
                            btn.style.cssText="margin:0px;float:left;border:0px;width:50px;height:50px;font-size:30px;background:url(boardleft.png);background-size:50px";
                        }
                        else if(i!=0&&i!=14&&j==14)
                        {
                            btn.style.cssText="margin:0px;float:left;border:0px;width:50px;height:50px;font-size:30px;background:url(boardright.png);background-size:50px";
                        }
                        else if(i==0&&j==0)
                        {
                            btn.style.cssText="margin:0px;float:left;border:0px;width:50px;height:50px;font-size:30px;background:url(boardtopleft.png);background-size:50px";
                        }
                        else if(i==14&&j==0)
                        {
                            btn.style.cssText="margin:0px;float:left;border:0px;width:50px;height:50px;font-size:30px;background:url(boardbottomleft.png);background-size:50px";
                        }
                        else if(i==0&&j==14)
                        {
                            btn.style.cssText="margin:0px;float:left;border:0px;width:50px;height:50px;font-size:30px;background:url(boardtopright.png);background-size:50px";
                        }
                        else if(i==14&&j==14)
                        {
                            btn.style.cssText="margin:0px;float:left;border:0px;width:50px;height:50px;font-size:30px;background:url(boardbottomright.png);background-size:50px";
                        }
                        btn.id=((i*15)+j).toString();
                        document.getElementById("B").appendChild(btn);
                        document.getElementById(((i*15)+j).toString()).onclick=function(arg) {
                                return function() {
                                    func(arg);
                            }
                        }(i*15+j);
                    }
                }
                document.getElementById("112").style.cssText="margin:0px;float:left;border:0px;width:50px;height:50px;font-size:30px;background:url(boardmid.png);background-size:50px";
                document.getElementById("48").style.cssText="margin:0px;float:left;border:0px;width:50px;height:50px;font-size:30px;background:url(boardmid.png);background-size:50px";
                document.getElementById("56").style.cssText="margin:0px;float:left;border:0px;width:50px;height:50px;font-size:30px;background:url(boardmid.png);background-size:50px";
                document.getElementById("168").style.cssText="margin:0px;float:left;border:0px;width:50px;height:50px;font-size:30px;background:url(boardmid.png);background-size:50px";
                document.getElementById("176").style.cssText="margin:0px;float:left;border:0px;width:50px;height:50px;font-size:30px;background:url(boardmid.png);background-size:50px";