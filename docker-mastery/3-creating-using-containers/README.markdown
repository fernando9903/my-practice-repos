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

