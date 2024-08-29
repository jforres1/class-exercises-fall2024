import java.util.ArrayList;
import java.util.List;

public class ContainsPair{
    public static void main(String[] args){
        ArrayList<Integer> l = new ArrayList<Integer>();
        for(int i = 0; i < 10; i++){
            l.add(i);
        }
        l.add(9);
        if(containsPair(l) == true){
            System.out.println("List l contains a pair!");
        }else{
            System.out.println("List l does not contain a pair!");
        }
    }
    public static boolean containsPair(List<Integer> l) {
        List<Integer> unique = new ArrayList<Integer>();
        for (int i = 0; i < l.size(); i++) {
            if (unique.contains(l.get(i))) {
                return true;
            }
            unique.add(l.get(i));
        }
        return false;
     }     
}
