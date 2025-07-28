function u=u_2(x,t)
    u=pi/2;
    n=1;
    while true
        part=4*(sin(n*pi/2)^2)/(n^2)/pi*exp(-n^2*t)*cos(n*x);
        if abs(part)<1e-8
            break;
        end
        u=u+part;
        n=n+1;
    end
end