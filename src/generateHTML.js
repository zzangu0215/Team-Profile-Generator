const basicBlock = function () {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewpoint" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="Id=edge">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
      <link href="https://fonts.googleapis.com/css2?family=Indie+Flower&family=Otomanopee+One&family=Merienda&family=Rajdhani:wght@700&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
      <link rel="stylesheet" href="style.css">
      <title>My Team Profile</title>
    </head>

    <body>
      <header>
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1 class="display-4 text-center">My Team</h1>
          </div>
        </div>
      </header>

      <main>
        <div class="container">
          <div class="row justify-content-center" id="entire-team">
          </div>
        </div>
      </main>
    </body>

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>
  </html>
  `;
}

function appendManager(manager) {
  const managerBlock = `
  <div class="card border-secondary mb-3 mt-4">
    <div class="card-header" id="manager">
      <h3>${manager.manager_name}</h3>
      <h4><i class="bi bi-person-badge-fill"></i><strong> Manager</strong></h4>
    </div>
    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item" id="id"><strong>ID: </strong>${manager.manager_id}</li>
        <li class="list-group-item" id="email"><strong>Email: </strong><a href="mailto:${manager.manager_email}">${manager.manager_email}</a></li>
        <li class="list-group-item" id="office-number"><strong>Office Number: </strong>${manager.manager_office}</li>
      </ul>
    </div>
   </div>
  `;

  $('#entire-team').append(managerBlock);
}

function appendEngineer(engineer) {
  const engineerBlock = `
  <div class="card border-secondary mb-3 mt-4">
    <div class="card-header" id="engineer">
      <h3>${engineer.employee_name}</h3>
      <h4><i class="bi bi-laptop"></i><strong> Engineer</strong></h4>
    </div>
    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item" id="id"><strong>ID: </strong>${engineer.employee_id}</li>
        <li class="list-group-item" id="email"><strong>Email: </strong><a href="mailto:${engineer.employee_email}">${engineer.employee_email}</a></li>
        <li class="list-group-item" id="github"><strong>Github: </strong><a href="https://github.com/${engineer.employee_github}/">${engineer.employee_github}</a></li>
      </ul>
    </div>
   </div>
  `;

  $('#entire-team').append(engineerBlock);
}

function appendIntern(intern) {
  const internBlock = `
  <div class="card border-secondary mb-3 mt-4">
    <div class="card-header" id="intern">
      <h3>${intern.employee_name}</h3>
      <h4><i class="bi bi-laptop"></i><strong> Intern</strong></h4>
    </div>
    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item" id="id"><strong>ID: </strong>${intern.employee_id}</li>
        <li class="list-group-item" id="email"><strong>Email: </strong><a href="mailto:${intern.employee_email}">${intern.employee_email}</a></li>
        <li class="list-group-item" id="github"><strong>School: </strong>${intern.employee_school}</li>
      </ul>
    </div>
   </div>
  `;

  $('#entire-team').append(internBlock);
}