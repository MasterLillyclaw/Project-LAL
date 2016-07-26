
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

class FreestyleSnowmanHandler(webapp2.RequestHandler):
    def get(self):
        template = jinja_environment.get_template('FreestyleSnowman.html')
        self.response.out.write(template.render())

class FreestyleHouseHandler(webapp2.RequestHandler):
    def get(self):
        template = jinja_environment.get_template('FreestyleHouse.html')
        self.response.out.write(template.render())

class MathSnowmanHandler(webapp2.RequestHandler):
    def get(self):
        template = jinja_environment.get_template('MathSnowman.html')
        self.response.out.write(template.render())

class MathHouseHandler(webapp2.RequestHandler):
    def get(self):
        template = jinja_environment.get_template('MathHouse.html')
        self.response.out.write(template.render())


app = webapp2.WSGIApplication([
    ('/', MainHandler),
    ('/freestyle-snowman', FreestyleSnowmanHandler),
    ('/freestyle-house', FreestyleHouseHandler),
    ('/math-snowman', MathSnowmanHandler),
    ('/math-house', MathHouseHandler),
], debug=True)
