function u = heat_classical_implicit(a, space_net, time_net, u0)
    delta_x = space_net(2) - space_net(1);
    delta_t = time_net(2) - time_net(1);
    mu = delta_t / delta_x / delta_x;
    u = zeros(size(time_net, 2), size(space_net, 2));
    u(1, :) = u0;
    B = zeros(size(space_net, 2) - 1);
    for i = 1: size(B, 1)
        if(i == 1)
            B(i, end) = -mu * a;
        else
            B(i, i - 1) = -mu * a;
        end
        B(i, i) = 1 + 2 * mu * a;
        if(i == size(B, 1))
            B(i, 1) = -mu * a;
        else
            B(i, i + 1) = -mu * a;
        end
    end
    for i = 2: size(time_net, 2)
        u(i, 2: end) = linear_solve(B, u(i - 1, 2: end)');
        u(i, 1) = u(i, end);
    end
end