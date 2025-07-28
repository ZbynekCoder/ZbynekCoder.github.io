function u=heat_classical_explicit(a,space_net,time_net,u0)
    delta_x=space_net(2)-space_net(1);
    delta_t=time_net(2)-time_net(1);
    mu=delta_t/delta_x/delta_x;
    u=zeros(size(time_net,2),size(space_net,2));
    u(1,:)=u0;
    for i=2:size(time_net,2)
        u(i,1)=mu*a*(u(i-1,end-1)+u(i-1,2))+(1-2*mu*a)*u(i-1,1);
        for j=2:size(space_net,2)-1
            u(i,j)=mu*a*(u(i-1,j-1)+u(i-1,j+1))+(1-2*mu*a)*u(i-1,j);
        end
        u(i,end)=mu*a*(u(i-1,end-1)+u(i-1,2))+(1-2*mu*a)*u(i-1,end);
    end
end