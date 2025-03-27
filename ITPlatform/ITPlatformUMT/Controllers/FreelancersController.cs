using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BusinessObjects;

namespace ITPlatformUMT.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FreelancersController : ControllerBase
    {
        private readonly MyDbContext _context;

        public FreelancersController(MyDbContext context)
        {
            _context = context;
        }

        // GET: api/Freelancers
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Freelancer>>> GetFreelancers()
        {
            return await _context.Freelancers.ToListAsync();
        }

        // GET: api/Freelancers/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Freelancer>> GetFreelancer(string id)
        {
            var freelancer = await _context.Freelancers.FindAsync(id);

            if (freelancer == null)
            {
                return NotFound();
            }

            return freelancer;
        }

        // PUT: api/Freelancers/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutFreelancer(string id, Freelancer freelancer)
        {
            if (id != freelancer.FreelancerID)
            {
                return BadRequest();
            }

            _context.Entry(freelancer).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FreelancerExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Freelancers
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Freelancer>> PostFreelancer(Freelancer freelancer)
        {
            _context.Freelancers.Add(freelancer);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (FreelancerExists(freelancer.FreelancerID))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetFreelancer", new { id = freelancer.FreelancerID }, freelancer);
        }

        // DELETE: api/Freelancers/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFreelancer(string id)
        {
            var freelancer = await _context.Freelancers.FindAsync(id);
            if (freelancer == null)
            {
                return NotFound();
            }

            _context.Freelancers.Remove(freelancer);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool FreelancerExists(string id)
        {
            return _context.Freelancers.Any(e => e.FreelancerID == id);
        }
    }
}
