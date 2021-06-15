from flask import Flask, render_template, request
from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField

app = Flask(__name__)
app.config['SECRET_KEY'] = 'my_secret'

class BlogForm(FlaskForm):
    my_title = StringField('Blog Title')
    my_submit = SubmitField('Add to List')
    my_contents = StringField('Content:')


@app.route('/', methods=["GET", "POST"])
def home():
    blog_form = BlogForm()
    
    
    blog_index=[0,1,2]
    titles = ['Blog about Ian', 'Blog Post Lucy', 'Blog Post Big Lou']
    contents = ['Ian is a boy', 'Lucy is a girl', 'Big Lou is a cat']

    new_index = len(blog_index)

    if blog_form.validate_on_submit():
        new_title = blog_form.my_title.data
        new_content = blog_form.my_contents.data
        titles.append(new_title)
        blog_index.append(new_index)
        contents.append(new_content)

    return render_template('index.html', titles=titles,
         contents=contents, blog_index=blog_index,
         template_form=blog_form)

if __name__ == '__main__':
   app.run(debug = True)