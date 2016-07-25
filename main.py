
import jinja2
import webapp2
import os

template_dir = os.path.join(os.path.dirname(__file__), 'templates')
jinja_environment = jinja2.Environment(
    loader=jinja2.FileSystemLoader(template_dir))

class MainHandler(webapp2.RequestHandler):
    def get(self):
        template = jinja_environment.get_template('main-page.html')
        self.response.out.write(template.render())

class practicePaletteHandler(webapp2.RequestHandler):
    def get(self):
        template = jinja_environment.get_template('TemplatePracticePage.html')
        self.response.out.write(template.render())

app = webapp2.WSGIApplication([
    ('/', MainHandler),
    ('/practicePalette', practicePaletteHandler),
], debug=True)
