function u=u_1(x,t)
    u=0.5;
    n=1;
    while true
        part=2*sin(n*pi/2)/n/pi*exp(-n^2*t)*cos(n*x);
        if abs(part)<1e-8
            break;
        end
        u=u+part;
        n=n+1;
    end
end