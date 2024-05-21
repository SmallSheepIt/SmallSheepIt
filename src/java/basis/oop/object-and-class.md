# Java对象和类

下面是java代码
```java
package algorithm.sorts;

public class AlternatelyPrintOddAndEvenNumbers1 {

    private static int count = 0;
    private final static Object object = new Object();
    public static void main(String[] args) throws InterruptedException {

        Thread even = new Thread(() -> printEven());
        Thread odd = new Thread(AlternatelyPrintOddAndEvenNumbers1::printOdd);

        even.start();
        Thread.sleep(1000);
        odd.start();

    }

    public static void printEven() {
        while (count <= 100) {
            synchronized (object) {
                System.out.println("偶数：" + count++);
                object.notifyAll();
                if (count <= 100) {
                    try {
                        object.wait();
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                }
            }
        }
    }

    public static void printOdd() {
        while (count <= 100) {
            synchronized (object) {
                System.out.println("奇数：" + count++);
                object.notifyAll();
                if (count <= 100) {
                    try {
                        object.wait();
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                }
            }
        }
    }
}

```

下面是python代码
```python
# Copyright 2015 gRPC authors.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
"""The Python implementation of the GRPC helloworld.Greeter server."""

from concurrent import futures
import logging

import grpc
import demo_pb2
import demo_pb2_grpc
import time


class PersonInfo(demo_pb2_grpc.PersonInfoServicer):

    def GetCnName(self, request, context):
        return demo_pb2.CnNameResponse(cn_name=f"{request.en_name}->杨文金")

    def Sum(self, request, context):
        a = request.a
        b = request.b
        return demo_pb2.SumResponse(res=a + b)

    def GetCnNames(self, request, context):
        n1 = request.n1.en_name
        for i in n1:
            feature = demo_pb2.CnNameResponse(cn_name=i)
            time.sleep(1)
            yield feature

        print("******")
        n2 = request.n2.en_name
        for i in n2:
            feature = demo_pb2.CnNameResponse(cn_name=i)
            time.sleep(1)
            yield feature

    def SplitEnName(self, request, context):
        for c in request.en_name:
            time.sleep(1)
            yield demo_pb2.CharResponse(c=c)


def serve():
    port = '50051'
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    demo_pb2_grpc.add_PersonInfoServicer_to_server(PersonInfo(), server)
    server.add_insecure_port('[::]:' + port)
    server.start()
    print("Server started, listening on " + port)
    server.wait_for_termination()


if __name__ == '__main__':
    logging.basicConfig()
    serve()

```