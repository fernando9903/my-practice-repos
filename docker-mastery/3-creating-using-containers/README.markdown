# Section 3: Creating and Using Containers Like a Boss

> **NOTE**: I use **sudo** before each docker comand because I need to add the tag to the global tags in my Linux OS

## 17. Check Our Docker Install and Config

With this command we can check our Docker version isntall in our computers.
```
docker version
```

TODO
```
docker info
```

## 18. Starting a Nginx Web Server

```
docker container run --puplish 80:80 nginx
```

1. Downloaded image 'nginx' from Docker Hub.
2. Strarte a new container from that image
3. Opened port 80 on the host IP.
4. Routes that traffic to the container IP, port 80

> **NOTE**: You'll get a 'bind' error if the left number (host port) is being used by anything else, even another contasiner. You can use any port you want on the left, like 8080:80 or 8888:80, then use localhost:8888 when testing.

With this you can type on your browser **localhost** to access to your nginx.

> **NOTE**: turns out ctrl-c dosen't work the same way on Windows. It exists the foreground but leaves container running in background.

If you want to run the container in the background you need to indicate to docker with the flag --detach
```
docker container run --puplish 80:80 --detach nginx
```

You can see the containers that are running in your machine with this command.
```
docker container ls
```
> **NOTE**: this command only show you the conatainers that are currently running.


To stop the caontainers running in second plane you need to use:
```
docker container stop <CONTAINER ID>
```
rememeber that you only stop the container but it is not already deleted, You can see all the containers that are running and stoped adding the flag -a to the **docker container ls** command:
```
docker container ls -a
```

>**NOTE**: you only can put the first three numbers of the CONTAINER ID that you want to stop if you prefer.

If we dont specify the name of the container doker will assign an aleatory name to our container, for this reason to have more controlo with our containers we need to specify the name with the flag **--name**
```
docker container run --puplish 80:80 --detach --name <NAME> nginx
```

Now if we want we can see the logs running in the second plane of our containers
```
docker container logs webhost
```

To delete the container you can use
```
docker container rm <CONTAINER ID>
```
> **NOTE**: You can put multiple IDs with this comand bit it'll to delete only the stoped containers.

To delete all containers that are stil running you need to force th comand with the flag -f
```
docker container rm -f <CONTAINER ID>
```

## 19. Debrief: What Happens When We Run a Container

What happenes in 'docker container run'

1. Looks for that image locally in image cache, doesn't find anything.
2. Tghen looks in remote image repository (defaults to Docker Hub).
3. Downloads the latest version (nginx:latest by default).
4. Creates new container based on that image and prepares to start.
5. Gives it a virtual IP on a private network inside docker engine.
6. Opens up port 80 on host and forwards to port 80 nin container.
7. Starts container by using the CMD in the image Dockerfile.

Example Of Chaning The Defaults
TODO
take a screenshot

## 20. Container VS. VM: It's Just a Process

Containers aren't Mini.VM's

- They are just processes.
- Limited to what resorses they can access.
- Exit when process stops.

>Reourses:  
>- [eBook: Docker for the Virtualization Admin](https://github.com/mikegcoleman/docker101/blob/master/Docker_eBook_Jan_2017.pdf)
>- [conference: Cgroups, namespaces, and beyond: what are containers made from?](https://www.youtube.com/watch?v=sK5i-N34im8&list=PLBmVKD7o3L8v7Kl_XXh3KaJl9Qw2lyuFl)
>- [blog post: Docker Desktop for Mac Commands for Getting Into The Local Docker VM](https://www.bretfisher.com/docker-for-mac-commands-for-getting-into-local-docker-vm/)
>- [blog post: Getting a Shell in the Docker for Windows Moby VM](https://www.bretfisher.com/getting-a-shell-in-the-docker-for-windows-vm/)

## 21. Windows Containers: Docker Is No Longer Just Linux

Resouorses to understand this topic.

- [Docker + Microsoft - Investing in the Future of your Applications](https://www.youtube.com/watch?v=QASAqcuuzgI)
- [Beyond \ - the path to Windows and Linux parity in Docker](https://www.youtube.com/watch?v=4ZY_4OeyJsw)
- [Windows Containers and Docker: 101](https://www.youtube.com/watch?v=066-9yw8-7c)

## 22. Assignment: Manage Multiple Containers

> **NOTE**: docs.docker.com and **--help** are your friend

- Run a **nginx**, a **mysql**, and a **httpd** (apache) server
- Run all of them **--detach** (or -d), name them with **--name**
- nginx should listen on **80:80**, httpd on **8080:80**, mysql on **3306:3306**
- When running **mysql**, use the **--env** option (or **-e**) to pass in **MYSQL_RTANDOM_ROOT_PASSWORD=yes**
- Use **docker container logs** on mysql to find tghe random password it created on startup.
- Clean it all up with **docker container stop** anmd **docker container rm** (both can accept multiple names or ID's).
- Use **docker container ls** to ensure everything is corr ect before and after cleanup.
