clear
clc

J=18;
error=[0,0,0,0,0];
order=[0,0,0,0];

for round=1:5
    space_net=linspace(-pi,pi,2*J+1);
    delta_x=space_net(2)-space_net(1);
    time_net=linspace(0,1,1/(0.4*pi*pi/J/J));
    J=J*2;

    u0=arrayfun(@u0_1,space_net);
    %u0=arrayfun(@u0_2,space_net);
    u_star=zeros(size(time_net,2),size(space_net,2));
    for i=1:size(time_net,2)
        for j=1:size(space_net,2)
            u_star(i,j)=u_1(space_net(j),time_net(i));
            %u_star(i,j)=u_2(space_net(j),time_net(i));
        end
    end
    %u=heat_classical_explicit(1,space_net,time_net,u0);
    %u=heat_classical_implicit(1,space_net,time_net,u0);
    u=heat_cn(1,space_net,time_net,u0);

    error(round)=sqrt(sum((u(end,:)-u_star(end,:)).^2)*delta_x);
end
for round=1:4
    order(round)=(log(error(round))-log(error(round+1)))/log(2);
end
