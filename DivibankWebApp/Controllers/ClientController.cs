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
    public class ClientController : ControllerBase
    {
        private readonly IRepository _repository;

        public ClientController(IRepository repository)
        {
            _repository = repository;
        }
        // GET: api/<DataController>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Client>>> ClientList()
        {
            return await _repository.SelectAll<Client>();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Client>> GetClient(long id)
        {
            var model = await _repository.SelectById<Client>(id);

            if (model == null)
            {
                return NotFound();
            }

            return model;
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateClient(long id, Client model)
        {
            if (id != model.Id)
            {
                return BadRequest();
            }

            await _repository.UpdateAsync<Client>(model);

            return NoContent();
        }

        [HttpPost]
        public async Task<ActionResult<Client>> InsertClient([FromBody] Client model)
        {
            await _repository.CreateAsync<Client>(model);
            return CreatedAtAction("GetClient", new { id = model.Id }, model);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Client>> DeleteClient(long id)
        {
            var model = await _repository.SelectById<Client>(id);

            if (model == null)
            {
                return NotFound();
            }

            await _repository.DeleteAsync<Client>(model);

            return model;
        }
    }
}