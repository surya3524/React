﻿using MediatR;
using Persistence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Activities
{
    public class Delete
    {
        public class Command: IRequest
        {
            public Guid Id { get; set;}
        }

        public class Handler : IRequestHandler<Command>
        {
            public Handler(DataContext context)
            {
                _context = context;
            }

            public DataContext _context { get; }

            public async Task Handle(Command request, CancellationToken cancellationToken)
            {
                var activity = await _context.Activities.FindAsync(request.Id);
                _context.Activities.Remove(activity);
                await _context.SaveChangesAsync();
            }
        }

    }
}
