FROM nginx:1.23.0

COPY /var/lib/jenkins/workspace/job/AngularLaw/dist/project/ /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
