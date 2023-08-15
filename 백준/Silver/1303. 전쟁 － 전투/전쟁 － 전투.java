

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
	static char map[][];
	static int N,M, bCnt, wCnt, totalw, totalb;
	static char color;
	public static void main(String[] args) throws IOException {

	    BufferedReader br= new BufferedReader(new InputStreamReader(System.in));
	    String st[]=br.readLine().split(" ");
	    N=Integer.parseInt(st[0]);
	    M=Integer.parseInt(st[1]);
	    
	    map=new char[M][N];
	    for (int i=0; i<M; i++) {
	        String m=br.readLine();
	        for (int j=0; j<N; j++) {
	            map[i][j]=m.charAt(j);
	        }
	    } 
	    int result=0;
	    for (int i=0; i<M; i++) {
	        for (int j=0; j<N; j++) {
	                if(map[i][j]!='0' ) {
	                	color=map[i][j];
	                	if( dfs(i, j)==true) {
	                        totalb+=bCnt*bCnt;
		                    totalw+=wCnt*wCnt;
		                    bCnt=0;
		                    wCnt=0;
	                	}
	                }
	        }
	    }

	    System.out.println(totalw+" "+totalb);
	}

	static boolean dfs(int x, int y) {
	    if (x <= -1 || x >= M || y <= -1 || y >= N) {
	    	return false;
	    } 
	    if(map[x][y]==color) {
	        if(color=='B') bCnt++;
	        else wCnt++;
	    	map[x][y]='0';
	        dfs(x-1, y);
	        dfs(x, y-1);
	        dfs(x+1, y);
	        dfs(x, y+1);
	        return true;
	    }
	    return false;
	}
	}