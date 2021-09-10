using DivibankWebApp.Models;
using DivibankWebApp.Repository;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace DivibankWebApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoanController : ControllerBase
    {
        private readonly IRepository _repository;

        public LoanController(IRepository repository)
        {
            _repository = repository;
        }
        // GET: api/<DataController>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Loan>>> ClientList()
        {
            return await _repository.SelectAll<Loan>();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Loan>> GetLoan(long id)
        {
            var model = await _repository.SelectById<Loan>(id);

            if (model == null)
            {
                return NotFound();
            }

            return model;
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateMember(long id, Loan model)
        {
            if (id != model.Id)
            {
                return BadRequest();
            }

            await _repository.UpdateAsync<Loan>(model);

            return NoContent();
        }

        [HttpPost]
        public async Task<ActionResult<Loan>> InsertLoan([FromBody] Loan model)
        {
            await _repository.CreateAsync<Loan>(model);
            return CreatedAtAction("GetLoan", new { id = model.Id }, model);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Loan>> DeleteLoan(long id)
        {
            var model = await _repository.SelectById<Loan>(id);

            if (model == null)
            {
                return NotFound();
            }

            await _repository.DeleteAsync<Loan>(model);

            return model;
        }
    }
}