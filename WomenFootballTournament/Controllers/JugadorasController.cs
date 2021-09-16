using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using WomenFootballTournament.Models;
using System.Web.Http.Cors;

namespace WomenFootballTournament.Controllers
{
    [EnableCors(origins: "http://127.0.0.1:5500", headers: "*", methods: "*")]
    public class JugadorasController : ApiController
    {
        private TournamentEntities db = new TournamentEntities();

        // GET: api/Jugadoras
        public IQueryable<Jugadoras> GetJugadoras()
        {
            return db.Jugadoras;
        }

        // GET: api/Jugadoras/5
        [ResponseType(typeof(Jugadoras))]
        public IHttpActionResult GetJugadoras(int id)
        {
            Jugadoras jugadoras = db.Jugadoras.Find(id);
            if (jugadoras == null)
            {
                return NotFound();
            }

            return Ok(jugadoras);
        }

        // PUT: api/Jugadoras/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutJugadoras(int id, Jugadoras jugadoras)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != jugadoras.Id)
            {
                return BadRequest();
            }

            db.Entry(jugadoras).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!JugadorasExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Jugadoras
        [ResponseType(typeof(Jugadoras))]
        public IHttpActionResult PostJugadoras(Jugadoras jugadoras)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Jugadoras.Add(jugadoras);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = jugadoras.Id }, jugadoras);
        }

        // DELETE: api/Jugadoras/5
        [ResponseType(typeof(Jugadoras))]
        public IHttpActionResult DeleteJugadoras(int id)
        {
            Jugadoras jugadoras = db.Jugadoras.Find(id);
            if (jugadoras == null)
            {
                return NotFound();
            }

            db.Jugadoras.Remove(jugadoras);
            db.SaveChanges();

            return Ok(jugadoras);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool JugadorasExists(int id)
        {
            return db.Jugadoras.Count(e => e.Id == id) > 0;
        }
    }
}