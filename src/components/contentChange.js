import React from "react";
import Accordion from "./accordion";


function Cards() {
    return (
        <div className="cards">
            <h1>Change Preventers</h1>
            <p>Change preventer bertujuan memisahkan bagian yang sering berubah untuk hindari perubahan besar.</p>
            <div className="cards__container">
            <br />
                <br />
                <h4>1. Divergent Change</h4>
                <p>Divergent Change merupakan kondisi dimana kita ingin perubahan didalam satu class yang mengakibatkan harus melakukan perubahan juga di class itu. Hal ini dikarenakan programmer tersebut melakukan copy-paste dari program lain. Penyelesaiannya dapat dengan melakukan Extract di Class, Subclass, maupun Superclass.</p>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div style={{paddingRight: '10px'}}>
                        <Accordion
                            title="Before"
                            content={`
            
                            public class Order {
                                private int orderId;
                                private String customerName;
                            
                                public void processOrder() {
                                    // process the order
                                }
                            
                                public void generateInvoice() {
                                    // generate invoice
                                }
                            
                                public void updateOrderStatus() {
                                    // update order status
                                }
                            }
                     
                            `}
                            contents={`Divergent Change terjadi ketika satu kelas sering dimodifikasi untuk alasan yang berbeda. Dalam kasus ini, jika ada perubahan dalam logika memproses order, kita mungkin juga harus memperbarui metode generateInvoice atau updateOrderStatus juga. Ini meningkatkan kompleksitas perubahan dan membuatnya rentan terhadap kesalahan.`}
                        />
                    </div>
                    <div style={{paddingLeft: '10px'}}>
                        <Accordion
                            title="After"
                            content={`
                            public class Order {
                                private int orderId;
                                private String customerName;
                            
                                public void processOrder() {
                                    // process the order
                                }
                            }
                            
                            public class Invoice {
                                public void generateInvoice() {
                                    // generate invoice
                                }
                            }
                            
                            public class OrderStatus {
                                public void updateOrderStatus() {
                                    // update order status
                                }
                            }
                            `}
                            contents={`Sebelum refactoring, class Order bertanggung jawab untuk melakukan tiga tugas yang berbeda: memproses order, menghasilkan invoice, dan memperbarui status order. Setelah refactoring, tanggung jawab ini dipisahkan ke dalam class-class yang berbeda, sehingga setiap class hanya bertanggung jawab untuk satu tugas, menghindari perubahan yang divergen pada class Order.`}
                        />
                    </div>
                </div>
                <br />
                <br />
                <h4>2. Shotgun Surgery</h4>
                <p>Shotgun Surgery adalah kondisi saat kita mengubah suatu kode di suatu class diharuskan pula mengubah kode di class lain. Yang menjadi pembeda adalah scope yang harus diubah, Shotgun Surgery memiliki scope yang lebih luas dibanding Divergent Change.</p>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div style={{paddingRight: '10px'}}>
                        <Accordion
                            title="Before"
                            content={`
                            public class ShoppingCart {
                                private List<Item> items;
                            
                                public void addItem(Item item) {
                                    items.add(item);
                                }
                            
                                public void removeItem(Item item) {
                                    items.remove(item);
                                }
                            
                                public void calculateTotal() {
                                    // calculate total
                                }
                            }
                            
                            public class Order {
                                private List<Item> items;
                            
                                public void addItem(Item item) {
                                    items.add(item);
                                }
                            
                                public void removeItem(Item item) {
                                    items.remove(item);
                                }
                            
                                public void calculateTotal() {
                                    // calculate total
                                }
                            
                                public void generateInvoice() {
                                    // generate invoice
                                }
                            }
                            `}
                            contents={`Kedua kelas, ShoppingCart dan Order, memiliki metode yang serupa untuk menambah dan menghapus item dari daftar, serta menghitung total belanja. Jika ada perubahan dalam logika menambah atau menghapus item, kita harus mengubah kedua kelas tersebut.`}
                        />
                    </div>
                    <div style={{paddingLeft: '10px'}}>
                        <Accordion
                            title="After"
                            content={`
                            public class ShoppingCart {
                                private List<Item> items;
                            
                                public void addItem(Item item) {
                                    items.add(item);
                                }
                            
                                public void removeItem(Item item) {
                                    items.remove(item);
                                }
                            
                                public void calculateTotal() {
                                    // calculate total
                                }
                            }
                            
                            public class Order {
                                private List<Item> items;
                            
                                public void addItem(Item item) {
                                    items.add(item);
                                }
                            
                                public void removeItem(Item item) {
                                    items.remove(item);
                                }
                            
                                public void calculateTotal() {
                                    // calculate total
                                }
                            
                                public void generateInvoice() {
                                    // generate invoice
                                }
                            }
                            `}
                            contents={`Sebelum refactoring, perubahan dalam metode addItem atau removeItem di ShoppingCart dan Order memerlukan perubahan di kedua class. Setelah refactoring, keduanya menjadi identik, sehingga perubahan dalam salah satu class tidak lagi memerlukan perubahan di class lain, mengurangi kemungkinan shotgun surgery.`}
                        />
                    </div>
                </div>
                <br />
                <br />
                <h4>3. Parallel Inheritance Hierarchies</h4>
                <p>Parallel Inheritance Hierarchies, yang mengharuskan kita membuat subclass untuk class lain saat kita membuat subclass untuk suatu class. Dapat diselesaikan dengan Move Method dan Move Field.</p>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div style={{paddingRight: '10px'}}>
                        <Accordion
                            title="Before"
                            content={`
                            // Hierarki pertama
    public class Employee {
        private String name;
        private String employeeId;
        // other attributes and methods
    }
    
    public class FullTimeEmployee extends Employee {
        private double salary;
        // other attributes and methods specific to full-time employees
    }
    
    public class PartTimeEmployee extends Employee {
        private double hourlyRate;
        // other attributes and methods specific to part-time employees
    }
    
    // Hierarki kedua
    public class Project {
        private String projectName;
        // other attributes and methods
    }
    
    public class FullTimeProject extends Project {
        private FullTimeEmployee projectManager;
        // other attributes and methods specific to projects managed by full-time employees
    }
    
    public class PartTimeProject extends Project {
        private PartTimeEmployee projectManager;
        // other attributes and methods specific to projects managed by part-time employees
    }
                            `}
                            contents={`Parallel Inheritance Hierarchies terjadi ketika dua hierarki kelas berbeda memiliki hubungan satu sama lain, sehingga perubahan dalam satu hierarki mengharuskan perubahan dalam hierarki yang lain.`}
                        />
                    </div>
                    <div style={{paddingLeft: '10px'}}>
                        <Accordion
                            title="After"
                            content={`
                            public class Employee {
                                private String name;
                                private String employeeId;
                                // other attributes and methods
                            }
                            
                            public class Project {
                                private String projectName;
                                // other attributes and methods
                            }
                            
                            public class FullTimeEmployee extends Employee {
                                private double salary;
                                // other attributes and methods specific to full-time employees
                            }
                            
                            public class PartTimeEmployee extends Employee {
                                private double hourlyRate;
                                // other attributes and methods specific to part-time employees
                            }
                            
                            public class ProjectManager {
                                private Employee employee; // Generalize to Employee
                                // other attributes and methods
                            }
                            
                            public class FullTimeProject extends Project {
                                private ProjectManager projectManager;
                                // other attributes and methods specific to projects managed by full-time employees
                            }
                            
                            public class PartTimeProject extends Project {
                                private ProjectManager projectManager;
                                // other attributes and methods specific to projects managed by part-time employees
                            }
                            `}
                            contents={`Sebelumnya, dua hierarki paralel: karyawan dan proyek. Setelah refactoring, satu hierarki untuk karyawan dan satu untuk proyek. Penggunaan kelas tambahan seperti ProjectManager untuk mengelola hubungan, mengurangi ketergantungan dan perubahan saling terkait.`}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;
